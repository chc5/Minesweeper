		//Chieh-Huang Chen
		function checkifwin()
		{
			var numofmine = 0;
			for(i=0;i<displaylist.length;i++)
			{
				if(displaylist[i] == OPEN)
					continue;
				else
					numofmine++;
			}
			if(numofmine == 10)
			{
				winner();
			}
		}
		function winner()
		{
			document.getElementById("title").innerHTML="YOU WIN!";
			var imglist = document.getElementsByTagName("img");
			for(i=0;i<minelist.length;i++)
			{
				if(minelist[i]== MINE)
				{
					imglist[i].src = FLAGGED;
				}
			}
			disableimgs();
		}
		function loser(num)
		{
			document.getElementById("title").innerHTML="YOU LOSE.";
			var imglist = document.getElementsByTagName("img");
			//alert(minelist);
			for(i=0;i<minelist.length;i++)
			{
				if(minelist[i]== MINE)
				{
					imglist[i].src = letterm;
				}
			}
			disableimgs();
		}
		function disableimgs()
		{
			var imglist = document.getElementsByTagName("img");
			for(i=0;i<imglist.length;i++)
			{
				imglist[i].onclick = "";
			}
		}
		function reset()
		{
			document.getElementById("title").innerHTML="MINESWEEPER";
			RESTART = ON;
			GAMESTATUS = false;
			easygame();
			addfunctions();
		}