const mongoose = require('mongoose');
const httpStatus = require('http-status');
const {omitBy, isNil} = require('lodash');
const bcrypt = require('bcryptjs');
const moment = require('moment-timezone');
const jwt = require('jwt-simple');
const uuidv4 = require('uuid/v4');
const APIError = require('../utils/APIError');
const {env, jwtSecret, jwtExpirationInterval} = require('../../config/variables');

/**
 * Present Schema
 * @private
 */
const presentSchema = new mongoose.Schema({
    email:{
        type : String,
        match : /^\S+@\S+\.\S+$/,
        required: true,
        unique : true,
        trim : true,
        lowercase:true,            
    },        
    backlog:{
        type : String,        
        index:true,        
    },
    status_prs : {
        type: String,
        index: true,
        maxlength : 1,
    },
    task:{
        type: String, 
        index:true,
    },
    note:{
        type:String,
        index:true,          
    }    
  }, {
  timestamps: true,
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
presentSchema.pre('save', async function save(next) {
  try {  
    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Methods
 */
presentSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'id_user','nama','backlog', 'task','note','createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },  
});

/**
 * Statics
 */
presentSchema.statics = {  

  /**
   * Get Present
   *
   * @param {ObjectId} id - The objectId of Present.
   * @returns {Promise<Present, APIError>}
   */
  async get(id_user) {
    try {
      let present;

      if (mongoose.Types.ObjectId.isValid(id_user)) {
        present = await this.findById(id_user).exec();
      }
      if (present) {
        return present;
      }

      throw new APIError({
        message: 'present does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

/**
 * @typedef User
 */
module.exports = mongoose.model('Present', presentSchema);