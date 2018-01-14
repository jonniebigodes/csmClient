'use strict';var express=require('express'),path=require('path'),passport=require('passport'),session=require('express-session'),bodyParse=require('body-parser'),app=express();if('production'!==process.env.NODE_ENV){var webpackDevMiddleware=require('webpack-dev-middleware'),webpackHotMiddleware=require('webpack-hot-middleware'),webpack=require('webpack'),config=require('./webpack.config'),compiler=webpack(config),configEnv=require('dotenv').config();app.use(webpackDevMiddleware(compiler,{noInfo:!0,quiet:!1,publicPath:config.output.publicPath,stats:{colors:!0}})),app.use(webpackHotMiddleware(compiler)),app.use(express.static(path.join(__dirname,'dist')))}app.set('port',process.env.PORT||5e3),app.use(bodyParse.json()),app.use(bodyParse.urlencoded({extended:!1})),app.use(session({secret:process.env.SESSION_HASH,resave:!1,saveUninitialized:!0})),app.use(passport.initialize()),app.use(passport.session()),'production'===process.env.NODE_ENV?app.use(express.static(path.join(__dirname,'../dist'))):app.use(express.static(path.join(__dirname,'dist'))),app.listen(app.get('port'),function(a){a?console.log('error csm: '+a):console.info('csm app is running on port',app.get('port'))});