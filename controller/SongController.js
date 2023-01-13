const Songs= require('../models/SongModel');
const PlayList= require('../models/PlayListModel');
const mongoose=require('mongoose');

exports.addSong=function(req,res){
    let song=new Songs({
        title:req.body.title,
    }); 
    Songs.create(song,function(err,song){
        if(err){
            res.send(err);
        }
        res.json(song);
    });
}
 exports.getSong=function(req,res){
        Songs.findById(req.params.id,function(err,song){
            if(err){
                res.send(err);
            }
            res.json(song);
        });
    }
//updateSong
exports.updateSong=function(req,res){
    Songs.findByIdAndUpdate(req.params.id,req.body,function(err,song){
        if(err){
            res.send(err);  
        }
        res.json(song);
    });
}
//deleteSong
exports.deleteSong=function(req,res){
    Songs.findByIdAndRemove(req.params.id,function(err,song){
        if(err){
            res.send(err);
        }
        res.json(song);
    });
}
//getSongs
exports.getSongs=function(req,res){
    Songs.find({},function(err,songs){
        if(err){
            res.send(err);
        }
        res.json(songs);
    });
}
