const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Auction = require('../models/Auction')
const Player = require('../models/Player')

// GET request to get the smallest 5 values of sellAmounts
router.get('/:id/:id1', async function (req, res) {
    try {
        const _id1 = req.params.id1
        const tradingData = await User.find({playerId: _id1})
        let sellAmounts = []
        tradingData.map((item, index) => {
            sellAmounts.push([item.address,item.sellAmount])
        })
        if (sellAmounts.length == 0) {
            res.send([])
        }
        sellAmounts.sort(function (a, b) {
            return a[1] - b[1];
        })
        let displaysellAmounts = sellAmounts.slice(0,Math.min(6,sellAmounts.length))
        res.send(displaysellAmounts)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Some error occured!")      
    }
})

// PATCH request to UserDB to update 
// receiver -> playerID = 0,  sellState to False and sellAmount to 0
// bidder -> set playerId to curr playerID , add the current playerID to TxHistory,
// in Player Table, add the bidder address to array of addresses and remove the receiver address
router.patch('/:id/:id1/:id2', async function (req, res) {
    try {
        const bidder = req.params.id
        const playerId1 = req.params.id1
        const receiver = req.params.id2
        await User.findOneAndUpdate({address: receiver},req.body[0])
        const bidderUpdate = await User.findOne({address: bidder})
        if (!bidderUpdate){
            let user = await User.create({
                address: bidder,
                playerId1: 0,
                history: []
            })
            user.save()
        }
        await User.findOneAndUpdate({address: bidder},req.body[1])
        await User.findOneAndUpdate({address: bidder},{ $push: { history: playerId1 } })
        await Player.findOneAndUpdate({ playerId: playerId1 },{ $push: { history: bidder }})
        await Player.findOneAndUpdate({ playerId: playerId1 },{$pull: {history: receiver} })
       res.send("Trading Value Updated!")

    } catch (error) {
        console.log(error.message)
        res.status(500).json("Some error occured!")      
    }
})

module.exports = router