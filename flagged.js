		//Chieh-Huang Chen
		function flagged(hello,num)
		{
			var imglist = document.getElementsByTagName("img");
			if(displaylist[num] == OPEN)
			{
				return;
			}
			if(displaylist[num] == HIDDEN)
			{
				//alert("hi");
				displaylist[num] = FLAGGED;
				imglist[num].src = FLAGPIC;
			}
			else
			{
				if(displaylist[num] == FLAGGED)
				{
					displaylist[num] = HIDDEN;
					imglist[num].src = HIDDENPIC;
				}
			}
		}