const Post = require('../models/Post');
const sequelize = require('../../config/database');

let spendHistory =  [];
const PostController = () => {
    spendHistory = (req, res) => {
      spendHistory = [{
        transId: 12, itemsPurchased: 345, amount: 1234, dateOfTrans: '22/03/1990', merchant: 'abc'
      },{
        transId: 13, itemsPurchased: 34234, amount: 2345, dateOfTrans: '23/04/1991', merchant: 'def'
      },{
        transId: 14, itemsPurchased: 3454, amount: 4567, dateOfTrans: '2/02/1996', merchant: 'merchant1'
      }, {
        transId: 15, itemsPurchased: 3445, amount: 5432, dateOfTrans: '03/03/1988', merchant: 'merchant2'
      }, {
        transId: 16, itemsPurchased: 3443, amount: 456, dateOfTrans: '22/03/1988', merchant: 'merchant5'
      }]
      return res.status(200).json({
        data: spendHistory
      });

    }

    updateSpendHistory = (req, res) => {
      let {transId, amount} = req.body;
      spendHistory.forEach((obj, index)=> {
        if (obj.transId === transId) {
          obj.amount = amount
        }
      })
      return res.status(200).json({
        data: spendHistory
      });

    }   

    clientContacts = (req, res) => {
      let arr = [{
        contactName: 'Ankit', contactTitle: 'Mr', companyName: 'Human.e', address: 'India', industry: 'IT'
      },{
        contactName: 'Pravin', contactTitle: 'Miss', companyName: 'Impact', address: 'Singapore', industry: 'Carpentry'
      },{
        contactName: 'Rohit', contactTitle: 'Sri', companyName: 'Analytics', address: 'Singasandra', industry: 'Retail'
      },{
        contactName: 'Mohit', contactTitle: 'Master', companyName: 'Tech Mahindra', address: 'Electronic', industry: 'Analytics'
      },{
        contactName: 'Rohan', contactTitle: 'Miss', companyName: 'Google', address: 'M.G.Road', industry: 'Technology'
      }]
      return res.status(200).json({
        data: arr
      });

    }

    return {
      spendHistory,
      updateSpendHistory,
      clientContacts
    }
}

module.exports = PostController;