 // console.log('Welcome to JS')
        // var a = 10
        // let b = 20
        // const c = a + b
        // console.log(c)


        function test() {
            let y;
            if (true) {
                var x = 100;
                var x = 200;
            }
            else {
                const d = 100;
                d = 101;
            }
            y = 99;
            y = 199;
            console.log(y)
        }

        function areaOfCircle(radius) {
            let area =Math.PI * radius * radius
            if (true)
            {
            console.log(x)
            var x=100;       
            }
            return area;
        }
        //test()
        console.log(areaOfCircle(5))

        let arr=[1,2,3,4,5];
        console.log(typeof(arr))
        let sum=0
        for(let num of arr)
            sum+=num
        console.log(sum)

        const area=()=>{
              return Math.PI *10 * 10 
        }

        const area1=(radius)=>Math.PI * radius * radius 
        
        console.log(area1(5))

        // function sum2(value1,value2)
        // {
        //     return value1+value2
        // }

        function sum2()
        {
            let sum=0
            console.log(arguments.length)
            for(let i=0;i<arguments.length;i++)
            sum+=arguments[i]
            return sum
        }


        console.log(sum2(10,20))
        console.log(sum2(10,20,30))

        //console.log(player)
        player={
            jno:18,
            pname:'Virat',
            mp:100,
            rs:5000,
            dad:100,
            'dad-name': 'Premnath',
            calculateAvg: function test ()
                          {
                            let avg=this.rs / this.mp;
                            console.log(avg)
                          }
        }

        let name=99
        console.log(player['dad-name'])

        console.log(player)
        console.log(player.pname)
        console.log(player['pname'])
        player.mom='Saroj'
        console.log(player.calculateAvg())

        console.log(typeof(player.jno))
        console.log(typeof(player.pname))
        console.log(typeof(player))

        const arr1=[1,2,3,4,5]
        for(let n in player)
        {
            console.log(n)
        }

        const sqrArr=arr1.map(
            (n)=>n*n
        )
        console.log(sqrArr)

        const sqrOddArr1=arr.filter(
            (n)=>n%2==1
        ).map(
            (n)=>n*n
        )
        console.log(sqrOddArr1)


        const sqrOddArrSum=arr.filter(
            (n)=>n%2==1
        ).map(
            (n)=>n*n
        ).reduce(
            (acc,num)=>acc+num,100
        )
        console.log(sqrOddArrSum)
    