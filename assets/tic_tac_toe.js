const tic_tac_toe = {
    board:['','','','','','','','',''],
    simbols:['x','o'],
    container_element:null,

    init: function(container){
        this.container_element = container;
    },

    draw: function(){
        let content = '';

        for(i in this.board){
            content += '<div>' +  i + '</div>';
        }
        this.container_element.innerHtml = content;
    }

};