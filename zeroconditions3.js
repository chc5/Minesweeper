		//Chieh-Huang Chen
		function displayboxeswithzero(num)
		{
			var displays = [];
			var searchvar = num;
			var tempnum = num;
			var arrowdirection = RIGHT;
			var lol =0;
				var onestep=[num];
				if(conditionlist[onestep[0]] == NOMINE)
				{
					onestep = ninechecks(onestep,0);
				}
				for(i=0;i<10000;i++)
				{
					if(conditionlist[onestep[i]] == NOMINE)
					{
						onestep = (ninechecks(onestep,i));
					}
				}
				
				displays = removeneg(onestep);
			displayaset(displays);
		}
		function removeneg(onestep)
		{
			var negnum = [];
			for(i=0;i<onestep.length;i++)
			{
				if(onestep[i] < 0)
				{
					negnum.push(onestep[i]);
				}
			}
			for(i=0;i<negnum.length;i++)
			{
				var oneplace = onestep.indexOf(negnum[i]);
				onestep.splice(oneplace,1);
			}
			return onestep;
		}
		function ninechecks(onestep,i)
		{
			var onestepatatime= onestep;
			var nothing = -1;
			if(onestepatatime.indexOf(onestep[i]) == nothing && onestep[i] >= 0 && onestep[i]<81)
			onestepatatime.push(onestep[i]);
			if(onestepatatime.indexOf(onestep[i]+9) == nothing && (onestep[i]+9) >= 0 && (onestep[i]+9)<81)
			onestepatatime.push(onestep[i]+9);
			if(onestepatatime.indexOf(onestep[i]-9) == nothing && (onestep[i]-9) >= 0 && (onestep[i]-9)<81)
			onestepatatime.push(onestep[i]-9);
			if(onestep[i]%9 != 0)
			{
				if(onestepatatime.indexOf(onestep[i]-1) == nothing && (onestep[i]-1) >= 0 && (onestep[i]-1)<81)
				onestepatatime.push(onestep[i]-1);
				if(onestepatatime.indexOf(onestep[i]-10) == nothing && (onestep[i]-10) >= 0 && (onestep[i]-10)<81)
				onestepatatime.push(onestep[i]-10);
				if(onestepatatime.indexOf(onestep[i]+8) == nothing && (onestep[i]+8) >= 0 && (onestep[i]+8)<81)
				onestepatatime.push(onestep[i]+8);
			}
			if(onestep[i]%9 != 8)
			{
				if(onestepatatime.indexOf(onestep[i]+1) == nothing && (onestep[i]+1) >= 0 && (onestep[i]+1)<81)
				onestepatatime.push(onestep[i]+1);
				if(onestepatatime.indexOf(onestep[i]+10) == nothing && (onestep[i]+10) >= 0 && (onestep[i]+10)<81)
				onestepatatime.push(onestep[i]+10);
				if(onestepatatime.indexOf(onestep[i]-8) == nothing && (onestep[i]-8) >= 0 && (onestep[i]-8)<81)
				onestepatatime.push(onestep[i]-8);
			}
			return onestepatatime;
		}
		function displayaset(displays)
		{
			var imglist = document.getElementsByTagName("img");
			for(i=0;i<displays.length;i++)
			{
				imglist[displays[i]].src = convertnum(conditionlist[displays[i]]);
				displaylist[displays[i]] = OPEN;
			}
		}
		function changedirection(direction,searchvar)
		{
			if(direction == RIGHT)
				return searchvar++;
			if(direction == LEFT)
				return searchvar--;
			if(direction == UP)
				return searchvar = searchvar - 9;
			if(direction == DOWN)
				return searchvar = searchvar + 9;
		}