 export const API_RM={
    URL:"https://rickandmortyapi.com/api",

    CHARACTER: function(){
        return `${this.URL}/character`
    },
    CHARACTER_BY_ID :function(id){
        return `${this.URL}/character/${id}`
    },
    EPISODE :function(){
        return `${this.URL}/episode`
    },
    
    EPISODE_BY_ID :function(id){
        return `${this.URL}/episode/${id}`
    }
    
 }

