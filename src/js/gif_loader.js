/**
* @brief Displays a loader
* @details This function renders a loader gif
* 
* @param  div which will be loaded
* @return nothing
* 
* @author Jean Bordat <bordat@gmail.com>
* Updated by Jean Bordat <jean.bordat@steria.com> the 2014-08-15
*/
function gifLoader (el, options) {
    
    this.container = $(el);
    // Options default definitions
    var defaults = {
        bgColor : '#F5F5F5',
        duration : 800,
        opacity : 0.7,
        classOveride : false,
        marginTop : (1 - (this.container.height() + 1))
    };
    this.options = jQuery.extend(defaults, options);
    
    /**
     * Init function
     */
    this.init = function() {
        var container = this.container;

        // Delete previous active loaders in this element
        this.remove(); 

        // Div "Loader" initialisation
        var overlay = $('<div id="loader"></div>').css({
            'background-color': this.options.bgColor,
            'opacity':this.options.opacity,
            'width': (container.width() + 0),
            'height': (container.height() + 0),
            'position':'relative',
            'top':'0px',
            'left':'0px',
            'z-index':99999,
            'margin-top': this.options.marginTop
        }).addClass('gif_overlay');

        // Target class override in order to host the Loader
        if (this.options.classOveride) {
            overlay.addClass(this.options.classOveride);
        }

        // Overlay placement
        container.append(
            overlay.append(
                $('<div></div>').addClass('gif_loader')
            ).fadeIn(this.options.duration)
        );
    };

    /*
     * Loader remove function
     */
    this.remove = function(){
        var overlay = this.container.children(".gif_overlay");
        if (overlay.length) {
            overlay.fadeOut(this.options.classOveride, function() {
                overlay.remove();
            });
        }              
    };

    /*
     * Function updating Gif placement in case of div size change
     */
    this.update_size = function(){
        var container = this.container;
        var loader = container.find('#loader');

        // Création de la div loader
        loader.css({
            'width': (container.width() + 0),
            'height': (container.height() + 0),
            'margin-top': (1 - (container.height() + 1))
        });
    };       

    this.init();
}