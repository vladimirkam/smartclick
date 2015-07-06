$(document).ready(function() {
            $('a').click(function() {
                var url = $(this).attr('href');

                $.ajax({
                    url:     url + '?ajax=1',
                    success: function(data){
                        $('#content').html(data);
                    }
                });

                if(url != window.location){
                    window.history.pushState(null, null, url);
                }

                return false;
            });

            $(window).bind('popstate', function() {
                $.ajax({
                    url:     location.pathname + '?ajax=1',
                    success: function(data) {
                        $('#content').html(data);
                    }
                });
            });
        });