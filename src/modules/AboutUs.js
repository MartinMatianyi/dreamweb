import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel, Statistic, Row, Col, Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import styles from '../styles/card.module.css'
var LunBoComponent = require('./lunbopic/lunbo.jsx');
var data = require('./lunbopic/data.json');
//MUST START WITH capital letter  (link below)
//https://dev.to/ranewallin/js-bites-react-hook-is-called-in-a-function-which-is-neither-a-react-function-or-sic-a-custom-react-hook-1g2c
const AboutUs = () => {
    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const wrapStyle = {
        width: '70%',
        margin: 'auto'
    };

    
    return (
        <div>
            <LunBoComponent lunboObject={data.lunboObject} imgArray={data.imgArray} linkArray={data.linkArray}/>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                    <Statistic title="Active Users" value={2308} />
                </Col>
            </Row>

            <br />

            <div className={styles.card}>
            <div className={styles.container}></div>
                I dont know what is wrong about this Man ) LMAO
                And this is About Us for now
                To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.
This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
those elements for which it can make sense to write user style sheet rules,
            </div>
            <br />
            <br />
            <br />
            <div className={styles.aboutUsFooter}>
                <div>Contact Us At</div>

                <div >
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className={styles.aboutUsImg}><img src="https://pic.pngsucai.com/00/56/40/24c6b5da2b495420.jpg" width="30px" height="30px"/></a> 
                <a href="https://www.facebook.com/tianyi.ma.10" className={styles.aboutUsImg}><img src="https://pic.pngsucai.com/00/00/52/29f5b25c3f68bbc8.jpg" width="30px" height="30px"/></a> 
                <a href="https://wx.qq.com/" className={styles.aboutUsImg}><img src="https://mmbiz.qpic.cn/mmbiz_png/PzmdfkHXmVb72oySvPPW4l0BD2BITClxJAADYQfs19o37qb7W1ckCRTWFeURmHAundAZgQR71JvaMWP38a8WvA/640?wx_fmt=png" width="30px" height="30px"/></a> 
                </div>
            </div>
        </div>

    );

};

export default AboutUs;