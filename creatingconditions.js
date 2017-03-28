		//Chieh-Huang Chen
		function creategame(num)
		{
			createmines(MINEnum,SPACESnum,num);
			conditionmines();
		}
		function createmines(howmanymines,numspaces,num)
		{
			var minesnum = [];
			for(i=0;i<howmanymines;i++)
			{
				var randomnum = parseInt(Math.random()*numspaces);
				minesnum.push(randomnum);
			}
			minesnum.sort(function(a,b){return a-b});
			for(i=0;i<howmanymines;i++)
			{
				while(minesnum.lastIndexOf(minesnum[i])!= i || minesnum.indexOf(minesnum[i])!=i || checksurroundings(minesnum[i],num) == true/*minesnum[i] == num || minesnum[i-1] == num || minesnum[i+1] == num || minesnum[i+8] == num*/)
				{
					var randomnum = parseInt(Math.random()*numspaces);
					if(randomnum == minesnum[i])
					{
						continue;
					}
					else
					{
						minesnum.splice(i,1,randomnum);
					}
				}
 			}
			minesnum.sort(function(a,b){return a-b});
			for(i=0;i<minesnum.length;i++)
			{
				minelist[minesnum[i]] = MINE;
			}
			minesnumber = minesnum;
		}
		function checksurroundings(minesnum,num)
		{
			 if(minesnum == num || minesnum == parseInt(num-1) || minesnum == parseInt(num+1) || minesnum == parseInt(num-8) || minesnum == parseInt(num-9) || minesnum == parseInt(num-10) || minesnum == parseInt(num+8) || minesnum == parseInt(num+9) || minesnum == parseInt(num+10))
			return true;
			else return false;
		}
		function conditionmines()
		{
			var mineconditions = [];	
			for(i=0;i<minelist.length;i++)
			{
				var minesaround = 0;
				if(minelist[i-1] == MINE && parseInt(i%9) != 0)
					minesaround++;
				if(minelist[i+1] == MINE && parseInt(i%9) != 8)
					minesaround++;
				if(minelist[i-8] == MINE && parseInt(i%9) != 8)
					minesaround++;
				if(minelist[i-9] == MINE)
					minesaround++;
				if(minelist[i-10] == MINE && parseInt(i%9) != 0)
					minesaround++;
				if(minelist[i+8] == MINE && parseInt(i%9) != 0)
					minesaround++;
				if(minelist[i+9] == MINE)
					minesaround++;
				if(minelist[i+10] == MINE && parseInt(i%9) != 8)
					minesaround++;
				if(minelist[i] == MINE)
					minesaround = MINE;
				mineconditions.push(minesaround);
			}
			conditionlist = mineconditions;
			//admincheck
			//displaynum(conditionlist);
		}