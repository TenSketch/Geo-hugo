# tattoo-shop-hugo-theme

## Image credits

<a href='https://www.freepik.com/vectors/vintage'>Vintage vector created by dgim-studio - www.freepik.com</a>

https://www.pexels.com/photo/grayscale-photo-of-person-applying-tattoo-955938/
Photo by Adrian Boustead from Pexels

https://www.pexels.com/photo/photo-of-left-arm-with-tattoo-2183131/
Photo by Kevin Bidwell from Pexels


https://www.pexels.com/photo/adult-artist-blur-dark-428105/
Photo by Dan Prado from 

## Icon credits

Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

insta logo
<a href="https://www.freepnglogos.com/images/instagram-logo-png-2428.html">instagram logos png images free download from freepnglogos.com</a>

twitter logo
<a href="https://www.freepnglogos.com/images/twitter-logo-png-5860.html">twitter logo vector png clipart from freepnglogos.com</a>

youtube logo
<a href="https://www.freepnglogos.com/images/youtube-logo-png-2069.html">youtube logo hd from freepnglogos.com</a>

fb logo
<a href="https://www.freepnglogos.com/images/facebook-logo-481.html">facebook logo design from freepnglogos.com</a>

### Tasks to be completed

1. old feedbacks upload and feedback pg redesign
<!-- 2. whatsapp link in footer -->
3. Admin panel design
    - upload images
    - news
4. google business api complete https://docs.google.com/forms/d/e/1FAIpQLSfC_FKSWzbSae_5rOpgwFeIUzXUF1JCQnlsZM_gC1I2UHjA3w/viewform?gxids=7757 for reviews widget.
5. fb chat sdk
6. Contact page redesign- location images, multipe map markers, jd and im links
7. News section design
8. Attractive and modern UI and UX testing
9. Footer with info abt company- keywords
10. About page redesign
<!-- # 11. resize and compress all images -->
<!-- 12. Change font --> under testing--!

https://wiki-tattoo.blogspot.com/2019/10/best-tattoo-shop-in-chennai.html
https://threebestrated.in/tattoo-shops-in-chennai-tn
https://www.shothotspot.com/hotspot/kilpauk-chennai-tamil-nadu-india/geo-tattoos
https://caosurbanopoetico.blogspot.com/2015/04/tattoo-removal-in-chennai.html
https://ishare.rediff.com/video/entertainment/geo-tattoos-chennai-tv-show-1/8684323
https://business.google.com/website/geo-tattoos
http://geotattoos.blogspot.com/2014/11/tattoo-removal-in-chennai.html
https://twitter.com/george25571240
http://www.findglocal.com/IN/Chennai/211447195599197/Geo-Tattoos
https://www.flickr.com/people/geo_tattoos/
https://geotattoo.weebly.com/




<!--  temp-->

<div id="carouselHacked" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
    <ol class="carousel-indicators">
        {{range $index, $val := .Site.Taxonomies.tags.slider }}
        {{if (eq $index 0)}}
        <li data-target="#carouselHacked" data-slide-to="{{$index}}" class="active"></li>
        {{ else }}
        <li data-target="#carouselHacked" data-slide-to="{{$index}}"></li>
        {{end}}
        {{end}}
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox" aria-label="carousel slider">
        {{range $index, $val := .Site.Taxonomies.tags.slider }}
        {{if (eq $index 0)}}
        <div class="item active" role="slider">
            {{ else }}
            <div class="item" role="slider">
                {{ end }}
                <img src="{{.Page.Params.Image}}" alt="{{.Title}}">
                <div class="slider_text {{.Description}}">
                    {{.Title}}
                </div>
            </div>
            {{ end }}
        </div>
        <!-- Controls -->
        <a class="left carousel-control" href="#carouselHacked" role="button" data-slide="prev">
            <span class="center-box">◀</span>
        </a>
        <a class="right carousel-control" href="#carouselHacked" role="button" data-slide="next">
            <span class="center-box">▶</span>
        </a>
    </div>
</div>


style="background-color: #fff; border-color: transparent;"

background: linear-gradient(2770deg, rgb(2 2 2), rgb(249 249 249) 70.71%),
    linear-gradient(127deg, rgb(255 255 255 / 70%), rgb(0 0 0) 70.71%),
    linear-gradient(336deg, rgb(234 224 224 / 80%), rgb(255, 255, 255) 70.71%);