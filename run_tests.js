var exec = require('child_process').exec,
    child;

child = exec('mocha ./tests',
  function (error, stdout, stderr) {
    stderr && alertErr(stderr) || alertPass() ;
});
var alertErr =function (err) {
	console.log("failed -",err);
	exec("vlc ./choosle.mp3 vlc://quit");
	printLog();
	return true;
}
var alertPass =function () {
	console.log("Passed");
	exec("vlc ./shot.ogg vlc://quit");
	return true;
}
var printLog=function(){
	exec("cat prev_head",function(error,stdout){
		var log= "git log --pretty=format:%H HEAD..."+stdout;
		console.log(log);
		exec(log,function(err,stdout){
			console.log("logs",stdout);
		})
	})
}