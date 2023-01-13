const PlayList= require('../models/PlayListModel');
const Songs= require('../models/SongModel');
const mongoose=require('mongoose');
//Create Play List
exports.addPlayList=function(req,res){
    let playlist=new PlayList({
        title:req.body.title,
        Song:[]
    });
    PlayList.create(playlist,function(err,playlist){
        if(err){
            res.send(err);
        }
        res.json(playlist);
    });
}
//getPlayList
exports.getPlayList=function(req,res){
    PlayList.findById(req.params.id,function(err,playlist){
        if(err){
            res.send(err);
        }
        res.json(playlist);
    });
}
exports.addSongToPlayList=function(req,res){
    PlayList.findById(req.params.id,function(err,playlist){
        if(err){
            res.send(err);
        }


            playlist.Song.push(req.body.id);
            playlist.save(function(err,playlist){
                if(err){
                    res.send(err);
                }
                res.json(playlist);
            });
      
    });
}
exports.removeSongFromPlayList=function(req,res){
    PlayList.findById(req.params.id,function(err,playlist){
        if(err){
            res.send(err);
        }

            console.log(playlist);

            playlist.Song.pull(req.body.id);
            playlist.save(function(err,playlist){
                if(err){
                    res.send(err);
                }
                res.json(playlist);
            }
            );
   
    });
}

                                                