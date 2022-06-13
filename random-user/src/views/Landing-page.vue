<template>
    <div class="landing">
        <div class="landing__S1">
            <div class="landing__S1__left">
                <button class="btn btn__secondary">Boost’in</button>
                <h1>Hello, ...</h1>
                <div>
                    <p>Want to accelerate Artur's benefits?</p>
                    <p> Artur's advertising option
                        allows you to benefit from Google and Facebook technologies,
                        managed by experts, in order to win new customers
                    </p>
                </div>
                <button class="btn btn__main">Contact my coach</button>
            </div>
            <div class="landing__S1__right">
                <img :src="$img['S1_1']">
            </div>
        </div>
        <div class="landing__S2">
            <div class="landing__S2__item">
                <img :src="$img['S2_1']">
                <span>Grow</span>
                <span>your community</span>
                <p>Build your page's credibility with new Facebook fans</p>
            </div>
            <div class="landing__S2__item">
                <img :src="$img['S2_2']">
                <span>Increase</span>
                <span>your interactions</span>
                <p>Draw more engagement to your Facebook posts</p>
            </div>
            <div class="landing__S2__item">
                <img :src="$img['S2_3']">
                <span>Boost your</span>
                <span>website traffic</span>
                <p>Receive qualified visits on your website thanks to Google</p>
            </div>
            <div class="landing__S2__item">
                <img :src="$img['S2_4']">
                <span>Generate</span>
                <span>prospects</span>
                <p>Attract prospects interested in your services</p>
            </div>
        </div>
        <div class="landing__S3">
            <h2>Why choose Artur for your advertising</h2>
            <div class="landing__S3__item">
                <div class="landing__S3__item__left">
                    <span>A team of experts at your service</span>
                    <p>A certified Google and Facebook Ads team takes care of everything</p>
                    <button class="btn btn__main">Learn more</button>
                </div>
                <div class="landing__S3__item__right">
                    <img :src="$img['S3_1']">
                </div>
            </div>
            <div class="landing__S3__item">
                <div class="landing__S3__item__left">
                    <span>Creation of tailor-made advertising</span>
                    <p>Texts, visuals and audiences according to your needs</p>
                    <button class="btn btn__main">Learn more</button>
                </div>
                <div class="landing__S3__item__right">
                    <img :src="$img['S3_2']">
                </div>
            </div>
            <div class="landing__S3__item">
                <div class="landing__S3__item__left">
                    <span>Campaigns optimized daily</span>
                    <p>Thanks to Artur, your advertising campaigns are perfected in order to obtain best results</p>
                    <button class="btn btn__main">Learn more</button>
                </div>
                <div class="landing__S3__item__right">
                    <img :src="$img['S3_3']">
                </div>
            </div>
            <div class="landing__S3__item">
                <div class="landing__S3__item__left">
                    <span>An adapted budget to your needs</span>
                    <p>An amount defined by you, according to your ambitions</p>
                    <button class="btn btn__main">Learn more</button>
                </div>
                <div class="landing__S3__item__right">
                    <img :src="$img['S3_4']">
                </div>
            </div>
        </div>
        <div class="landing__S4">
            <h2>Want to try ?</h2>
            <button class="btn btn__main">I am interested</button>
        </div>
    </div>
</template>