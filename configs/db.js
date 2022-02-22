const mongoose = require('mongoose');
const express = require('express');
const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/web14');
};

module.exports = connect;
