import db from '../services/profileService.js'
import express from 'express'

const routes = express.Router()

routes.post('/update-profile-img', async (req, res) => {
    const { image, user_id } = req.body

    if (!image) return res.status(404).json({ msg: 'Escolha uma imagem' })

    try {
        await db.updateProfileImage(user_id, image)
        res.status(200).json({ msg: "Foto de perfil atualizada" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

routes.post('/update-profile-background', async (req, res) => {
    const { background, user_id } = req.body
    if (!background) return res.status(404).json({ msg: 'Escolha uma imagem' })
    try {
        await db.updateProfileBackground(user_id ,background)
        res.status(200).json({ msg: "Foto do background atualizada" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

routes.post('/update-profile-description', async (req, res) => {
    const { description, user_id } = req.body

    try {
        await db.updateProfileDescription(user_id ,description)
        res.status(200).json({ msg: "Descrição atualizada" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

routes.post('/update-profile-location', async (req, res) => {
    const { location, user_id } = req.body

    try {
        await db.updateProfileLocation(user_id ,location)
        res.status(200).json({ msg: "Localização atualizada" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

routes.delete('/delete-profile-img/:id', async (req, res) => {
    const user_id = req.params.id
    try{
        await db.removeProfileImage(user_id)
        return res.status(200).json({ msg: "Imagem de Perfil Removida!"})
    } catch (err) {
        return res.status(500).json({ error: err.message, msg: "erro ao remover a imagem de perfil" })
    }
})

routes.delete('/delete-cover/:id', async (req, res) => {
    const user_id = req.params.id
    try{
        await db.removeProfileBackground(user_id)
        return res.status(200).json({ msg: "Cover removido!"})
    } catch (err) {
        return res.status(500).json({ error: err.message, msg: "erro ao remover o cover"})
    }
})

export default routes