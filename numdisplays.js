		//Chieh-Huang Chen
		function initalization()
		{
			minesweep = document.getElementById("minescreen");
			restartbutton = document.getElementById("restarting");
			beginbutton = document.getElementById("beginning");
			restartbutton.style.display = "none";
		}
		function unhidden(hello,num)
		{
			if(displaylist[num] == FLAGGED)
			{
				return;
			}
			else
			{
				if(GAMESTATUS == false)
				{
					GAMESTATUS = true;
					creategame(num);
					displayboxes(num);
				}
				else
				{
					displayboxes(num);
				}
			}
			checkifwin();
		}
		function displaynum(mineconditions)
		{
			var imglist = document.getElementsByTagName("img");
			for(i=0;i<imglist.length;i++)
			{
				imglist[i].src = convertnum(mineconditions[i]);
			}
		}
		function convertnum(num)
		{
			if(num == MINE)
			return letterm;
			if(num == 0)
			return numberzero;
			if(num == 1)
			return number1;
			if(num == 2)
			return number2;
			if(num == 3)
			return number3;
			if(num == 4)
			return number4;
			if(num == 5)
			return number5;
			if(num == 6)
			return number6;
			if(num == 7)
			return number7;
			if(num == 8)
			return number8;
		}
		function displayboxes(num)
		{
			if(conditionlist[num] == 0)
			{
				displayboxeswithzero(num);
			}
			else
			{
				if(conditionlist[num] == MINE)
				{
					loser(num);
				}
				else
				{
					displaynumber(num);
				}
			}
		}
		function displaynumber(num)
		{
			var imglist = document.getElementsByTagName("img");
			imglist[num].src = convertnum(conditionlist[num]);
			displaylist[num] = OPEN;
		}