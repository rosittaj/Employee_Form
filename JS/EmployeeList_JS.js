        var list1 = [];
        var list2 = [];
        var list3 = [];
        var list4 = [];
        var list5 = [];
        
        var list7 = [];
        var str = '';
        var n = 1;
        var x = 0;
        function AddRow(){
            /*Hide the table data before submit the form */
           var x = document.getElementById('SectionName');
           if (x.style.display == 'none') {
           x.style.display = 'block';
          }
            var AddRown = document.getElementById('show');
            var NewRow = AddRown.insertRow(n);

            list1[x] = document.getElementById("Ename").value;
            list2[x] = document.getElementById("Email").value;
            list3[x] = document.getElementById("Age").value;
            list4[x] = document.getElementById("Country").value;
            list5[x] = document.getElementById("State").value;
           
            var Gender = document.getElementsByName("Gender");
            if(Gender[0].checked){
                list7[x]=document.getElementById("Woman").value;
            }
            else if(Gender[1].checked){
                list7[x]=document.getElementById("Man").value;
            }
            else if(Gender[2].checked){
                list7[x]=document.getElementById("Non-binary").value;
            }
           
            var checks = document.getElementsByClassName('checks');
            for ( i = 0; i <6; i++) {
                if ( checks[i].checked === true ) {
                    str += checks[i].value + " ";
                }
                
            }
        /* Insert all input values in a table */
            var cel1 = NewRow.insertCell(0);
            var cel2 = NewRow.insertCell(1);
            var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
           
            var cel7 = NewRow.insertCell(5);
            var cel8 = NewRow.insertCell(6);

            cel1.innerHTML = list1[x];
            cel2.innerHTML = list2[x];
            cel3.innerHTML = list3[x];
            cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
           
            cel7.innerHTML = list7[x];
            cel8.innerHTML = str;

            n++;
            x++;
           
        }

