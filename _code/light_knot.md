---
title: RGB Knot Installation
image: /img/light_knot/light_knot.jpg
description: Suspending a knot in a three-dimensional color cube.
tech: processing, arduino, neopixel lights
layout: continue
order: 3
---

![light knot]({{ "/img/light_knot/light_knot.jpg" | absolute_url }})
All photos by Moon Jang

# RGB Knot Installation - [code](https://github.com/touchRED/neo-processing)

I’ve spent this Spring participating in [Moon Jang](http://www.moonjang.com/) and [David Gay's](http://euclidlab.org/david-gay) Mathematics Outreach Design Lab course, a class focused on fostering collaboration between Design and Mathematics students for the creation of “outreach products” that explain interesting math concepts to a broader audience.

For this first project, I worked with four different mathematicians to design and construct an installation explaining the math behind [knots](http://knotinfo.org/).

![light knot]({{ "/img/light_knot/3.jpg" | absolute_url }})

<!-- We realized early on that we were more interested in the path that knots take through space than anything else, and we thought the most striking yet informative way to present this information would use light, color, and interactivity. -->

Using a Neopixel light strip from [Adafruit](http://www.adafruit.com), we encoded the three-dimensional path of the knot into red, green and blue color space. Localizing our knot inside a cube, we derived the color of each LED from the point's location in space.

We chose this to be our mathematical idea because we were most interested in the fact that knots deform space into a minimally-complex shape – you cannot turn a figure 8 knot into a trefoil for example, and you can’t turn a trefoil into the unknot (circle).

![light knot]({{ "/img/light_knot/2.jpg" | absolute_url }})

While the mathematicians worked on the parameterization functions of the knot, I programmed the lights using [Arduino](https://www.arduino.cc/) and developed an interactive application in [Processing](https://processing.org/) that allowed users to control the lights over serial communication. Check out the code [here](https://github.com/touchRED/neo-processing)!

Another photo by Moon Jang, as well as a screenshot of the application:

![light knot]({{ "/img/light_knot/1.jpg" | absolute_url }})

![light knot]({{ "/img/light_knot/4.png" | absolute_url }})

<br>
<br>
<br>
<br>
