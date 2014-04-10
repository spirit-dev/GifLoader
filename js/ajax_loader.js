/**
* @brief Displays a loader
* @details This funciton renders a loader gif for each ajax request
* 
* @param  div which will be loaded
* @return nothing
* 
* @author Jean Bordat <bordat@gmail.com>
*/
function ajaxLoader (el, options) {
    
    // Définition des options par défaut
    var defaults = {
        bgColor : '#F5F5F5',
        duration : 800,
        opacity : 0.7,
        classOveride : false
    }
    this.options = jQuery.extend(defaults, options);
    this.container = $(el);

    this.init = function() {
        var container = this.container;

        // Supprimer tous les autre loaders
        this.remove(); 

        // Création de la div loader
        var overlay = $('<div id="loader"></div>').css({
            'background-color': this.options.bgColor,
            'opacity':this.options.opacity,
            'width': (container.width() + 0),
            'height': (container.height() + 0),
            'position':'relative',
            'top':'0px',
            'left':'0px',
            'z-index':99999,
            'margin-top': (1 - (container.height() + 1))
        }).addClass('ajax_overlay');

        // Overrider la class visé pour accueillir le loader
        if (this.options.classOveride) {
            overlay.addClass(this.options.classOveride);
        }

        // Placement de l'overlay
        container.append(
            overlay.append(
                $('<div></div>').addClass('ajax_loader')
            ).fadeIn(this.options.duration)
        );
    };

    this.remove = function(){
        var overlay = this.container.children(".ajax_overlay");
        if (overlay.length) {
            overlay.fadeOut(this.options.classOveride, function() {
                overlay.remove();
            });
        }              
    }

    this.update_size = function(){
        var container = this.container;
        var loader = container.find('#loader');

        // Création de la div loader
        loader.css({
            'width': (container.width() + 0),
            'height': (container.height() + 0),
            'margin-top': (1 - (container.height() + 1))
        });
    }              

    this.init();
}