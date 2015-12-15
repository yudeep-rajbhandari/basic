/**
 * Created by endlessveins on 12/15/15.
 */
var mongoose=require('mongoose');


module.exports=function(){
    mongoose.connect("mongodb://endlessveins:endlessveins@ds029615.mongolab.com:29615/knowfood");
}