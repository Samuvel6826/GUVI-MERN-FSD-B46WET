const { mongodb, client } = require('../config/dbconfig')

const getUsers = async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(process.env.dbName)
        let data = await db.collection('infos').find().sort({id:1}).toArray();
        res.status(200).send({
            data,
            message: "User Data Fetch Successful"
           
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        })
    } finally {
        await client.close()
    } 
}

const getUserById = async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(process.env.dbName)
        let userId = new mongodb.ObjectId(req.params.id)
        let data = await db.collection('infos').findOne({ _id: userId })
        if (data) {
            res.status(200).send({
                data,
                message: "User Data Fetch Successful"
            })
        }
        else {
            res.status(400).send({ message: "Invalid User ID" })
        }

    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        })
    } finally {
        await client.close()
    }
}

const createUser = async (req, res) => {
    await client.connect()
    try {
        const db = client.db(process.env.dbName)
        let existingUser = await db.collection('infos').findOne({ email: req.body.email })
        if (!existingUser) {
            await db.collection('infos').insertOne(req.body)

            res.status(200).send({
                message: "User Created Successfully"
            })
        }
        else {
            res.status(400).send({
                message: `${req.body.email} already exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        })
    } finally {
        await client.close()
    }
}

const editUserById = async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(process.env.dbName)
        let userId = new mongodb.ObjectId(req.params.id)
        let data = await db.collection('infos').findOne({ _id: userId })

        if (data) {
            await db.collection('infos').updateOne({ _id: userId }, { $set: req.body })
            res.status(200).send({ message: "User Data Edited Successful" })
        }
        else {
            res.status(400).send({ message: "Invalid User ID" })
        }

    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        })
    } finally {
        await client.close()
    }
}

const deleteUserById = async (req, res) => {
    await client.connect()
    try {
        let db = await client.db(process.env.dbName)
        let userId = new mongodb.ObjectId(req.params.id)
        let data = await db.collection('infos').findOne({ _id: userId })

        if (data) {
            await db.collection('infos').deleteOne({ _id: userId })
            res.status(200).send({
                message: "User Data Deleted Successful"
            })
        }
        else {
            res.status(400).send({ message: "Invalid User ID" })
        }

    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            errorMessage: error.message
        })
    } finally {
        await client.close()
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}