const btnprev = '<i class="fas fa-long-arrow-alt-left"></i>'
      const btnnext = '<i class="fas fa-long-arrow-alt-right"></i>'
      const btnprev2 = '<i class="fas fa-long-arrow-alt-left"></i>'
      const btnnext2 = '<i class="fas fa-long-arrow-alt-right"></i>'
      $('#caro1').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                navText: [
                  btnprev,
                  btnnext
                ],
                autoplay:true,
                dots:false,
                responsive:{
                    0:{
                        items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
      $('#caro2').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                navText: [
                  btnprev,
                  btnnext
                ],
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
      $('#caro3').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                navText: [
                  btnprev2,
                  btnnext2
                ],
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        })
      $('#caro4').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                navText: [
                  btnprev,
                  btnnext
                ],
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                },
                600:{
                    items:2
                }
            }
        })

        AOS.init();