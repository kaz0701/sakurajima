var db;

//データベースのコネクト
function db_conect(){
	db = openDatabase('sakurajima', '1.0', 'sakurajima', 10000000);
}


/*
 *  Tableが存在するかSQLを発行し、存在しない場合はCREATEする関数
 */
function createSQL(tx){
	tx.executeSql(
		"SELECT * FROM sqlite_master WHERE type = 'table' AND tbl_name = 'retention_tbl';", [],
		function (tx, results) {
			//Tableが存在しない場合SQLファイルを使いINSERT
			if(results.rows.length==0){
				console.log("new");
				tx.executeSql("CREATE TABLE [retention_tbl] ( [reg_id] TEXT );");
				tx.executeSql("INSERT INTO retention_tbl (reg_id) VALUES('');");
			}
		},
		errSQL
	);
}
/*

*/


//Error
function errSQL( tx, err){
	alert("ERROR:"+err);
	for(var key in err){
		console.log(key+":"+eval("err."+key));
	}
}
