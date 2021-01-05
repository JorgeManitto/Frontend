const vm = new Vue({
    el:'#app',
    data :{
        previous:null,
        current :'',
        operator : null,
        operatorClicked : false,
    },
    methods: {
        clear: function(){
            this.current='';
        },
        sing: function (){
            this.current = this.current.charAt(0) === '-' ?
            this.current.slice(1) : `-${this.current}`;
        },
        percent: function(){
            this.current = `${parseFloat(this.current)/100}`
        },
        append: function(num){
            if(this.operatorClicked){
                this.current = '';
                this.operatorClicked= false
            }
            this.current += `${num}`
        },
        dot : function(){
            if(this.current.indexOf('.') === -1){
                this.append('.');
            }
        },
        add: function(){
            this.operator = (a,b) => a+b;
            this.setPrevious()
        }
        ,
        times: function(){
            this.operator = (a,b) => a*b;
            this.setPrevious()
        }
        ,
        minus: function(){
            this.operator = (a,b) => a-b;
            this.setPrevious()
        }
        ,
        divide: function(){
            this.operator = (a,b) => a/b;
            this.setPrevious()
        },
        equal: function (){
            this.current =`${this.operator 
            (
                parseFloat(this.previous),
                parseFloat(this.current)
                
            )}`
        },
        setPrevious (){
            this.previous = this.current;
            this.operatorClicked = true; 
        }
    },  

})



