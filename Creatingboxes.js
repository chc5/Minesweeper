		//Chieh-Huang Chen
		function easygame()
		{
			restartbutton.style.display="inline-block";
			beginbutton.style.display="none";
			minelist = [];
			displaylist=[];
			for(i=0;i<81;i++)
			{
				minelist.push(HIDDEN);
				displaylist.push(HIDDEN);
			}
			if(RESTART == ON)
			{
				var imglist = document.getElementsByTagName("img");
				for(i=0;i<imglist.length;i++)
				{
					imglist[i].src = HIDDENPIC;
				}
			}
			else
			{
				maindisplay();
			}
		}
		function maindisplay()
		{
			if(minelist.length == 81)
			{
				for(var i=0;i<9;i++)
				{
					makerows(9);
				}
				MINEnum = 10;
				SPACESnum = 81;
				addfunctions();
			}
		}
		function makerows(idx)
		{
			var row = document.createElement("DIV");
			minesweep.appendChild(row);
			for(var i=0;i<idx;i++)
			{
				var imgnum = document.getElementsByTagName("img").length;
				var imgpic = document.createElement("IMG");
				imgpic.style.paddingRight = "4px";
				imgpic.src = HIDDENPIC;
				row.appendChild(imgpic);
			}
		}
		function addfunctions()
		{
			imglist = document.getElementsByTagName("img");
			for(var i=0;i<imglist.length;i++)
			{
				imglist[i].onclick = (function(){var currentI = i;return function() {unhidden(this,currentI)}})();;
				imglist[i].oncontextmenu = (function(){var currentI = i;return function() {flagged(this,currentI)}})();;
			}
		}