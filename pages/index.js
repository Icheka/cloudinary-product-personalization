import { useState, useEffect } from 'react';
import ProductImage from '../components/composites/ImageViewer';
import Navbar from '../components/composites/Navbar';
import Page from '../components/layout/Page';
import { ColorPickerArray, ColorDropPicker } from '../components/composites/Colors';
import FontPicker from '../components/elements/FontPicker';
import { DefaultTextInput } from '../components/elements/TextInput';
import { DefaultButton } from '../components/elements/Buttons';
import OverlayPickerArray from '../components/composites/Overlays/OverlayPickerArray';
import TexturePickerArray from '../components/composites/Textures/TexturePickerArray';


export default function Home() {
    // COLORS
    const [availableColors] = useState([`ffffff`, `47E8D2`, `DCA381`, `702C3C`, `E9C660`, `A11D1F`, `897115`, `598DE6`]);
    
    //OVERLAYS
    const [overlayOptionsArray] = useState([
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30,e_red:0/e_green:0/e_blue:0/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg`, overlay: `` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/q_auto,f_auto,h_30/cloudinary-logo.jpg`, overlay: `cloudinary-logo` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/q_auto,f_auto,h_30/fire.png`, overlay: `fire` }
    ]);

    // TEXTURES
    const [textureOptionsArray] = useState([
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30,e_red:0/e_green:0/e_blue:0/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg`, texture: `` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30,e_red:0/e_green:0/e_blue:0/l_heather_texture,o_30,w_30,h_30,c_crop/white-bar.jpg`, texture: `hanging-shirt-texture` },
    ]);

    // PERSONALIZATION TEXT
    const [availableFonts] = useState([
        { title: `Arial`, value: `Arial`, selected: true },
        { title: `Georgia`, value: `Georgia` },
        { title: `Sacremento`, value: `Sacramento` },
        { title: `Roboto`, value: `Roboto` },
        { title: `Montserrat`, value: `Montserrat` },
        { title: `Bitter`, value: `Bitter` }
    ]);

    // PERSPECTIVES
    const [imagePerspectives] = useState([
        { image: `https://res.cloudinary.com/demo-robert/q_auto,f_auto/$text_!%20!/o_0/l_sample,o_0,w_220,ar_30:25,c_fit,y_-40,x_-5,e_overlay/l_text:arial_100_bold:$(text),y_90,co_rgb:333,o_70,w_250/l_hanging_displace,e_displace,x_10,y_10/u_Hanging_T-Shirt_v83je9,e_replace_color:white:60:white/l_hanging-shirt-texture,o_0/l_Hanger_qa2diz,fl_relative,w_1.0/w_75,ar_1:1,c_pad/shirt_only.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/q_auto,f_auto/$text_!%20!/o_0/l_sample,o_0,w_330,ar_30:25,c_fit,y_-30,x_-5,e_overlay/l_text:arial_100_bold:$(text),y_150,co_rgb:333,o_70,w_350/l_laying_displace,e_displace,x_10,y_10/u_laying-shirt_xqstgr,e_replace_color:white:60:white/l_laying-shirt-texture,o_0/w_75,ar_1:1,c_pad/shirt_only.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/q_auto,f_auto/$text_!%20!/o_0/l_sample,o_0,w_300,ar_30:25,c_fit,y_-200,x_-5,e_overlay/l_text:arial_100_bold:$(text),y_-40,co_rgb:333,o_70,w_300/l_shirt_displace,e_displace,x_10,y_10/u_shirt_only,e_replace_color:white:60:white/l_heather_texture,o_0/u_model2/w_75,ar_1:1,c_pad/shirt_only.jpg` },
    ]);

    // DISPLACEMENTS
    const [availableImageDisplacements] = useState([
       `hanging_displace`, `laying_displace`, `shirt_displace`
    ]);

    // PRODUCT IMAGE
    const [productColor, setProductColor] = useState(availableColors[0]);
    const [productOverlay, setProductOverlay] = useState('');
    const [productTexture, setProductTexture] = useState('');
    const [productText, setProductText] = useState(' '); // space important here, or image will not be displayed
    const [tempText, setTempText] = useState('');
    const [productFont, setProductFont] = useState(availableFonts[0].value);
    const [productDisplacement, setProductDisplacement] = useState(availableImageDisplacements[1]);

    // CHANGE TEXT ON TEXT OVERLAY
    const changeProductText = e => {
        console.log('Updating text...');
        tempText == '' ? setProductText(' ') : setProductText(tempText);
    };

  return (
    <Page>
        <div className={`flex flex-col items-center min-h-screen w-full`}>
            <div className={`w-full pl-44`}>
                <Navbar className={`w-8/12 ml-20`} />
            </div>
            <div className={`flex flex-1`}>
                <div className={`flex flex-row w-full`}>
                    <main className={`w-8/12`}>
                        <div className={`relative -top-20 -left-20`}>
                            <ProductImage
                                className={`border-2 border-red-700 -mt-20`}
                                productColor={productColor}
                                overlay={productOverlay}
                                texture={productTexture}
                                text={productText}
                                font={productFont}
                                displacement={productDisplacement}
                            />
                        </div>
                        <div className={`bg-transparent`}>
                            <div className={`ml-0`}>
                                {/* <ColorPickerArray colorsArray={imagePerspectives} elementClassName={`mr-2 border border-gray-300`} isFluid={[80, 80]} /> */}
                            </div>
                        </div>
                    </main>
                    <aside className={`w-4/12`}>
                        <div className={`mt-10`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Select a color:</h2>
                            <div>
                                <ColorPickerArray colorsArray={availableColors} elementClassName={`mx-1`} onSelect={(e, index) => setProductColor(availableColors[index])} />
                            </div>
                        </div>
                        <div className={`mt-10`}>
                            <h6 className={`text-xs text-blue-500`}>Add a custom color</h6>
                            <ColorDropPicker onChange={ color => setProductColor(color) } />
                        </div>
                        <div className={`mt-10`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Select a texture:</h2>
                            <div>
                                <TexturePickerArray texturesArray={textureOptionsArray} elementClassName={`mr-2 border border-gray-300`} isFluid={[40, 40]} onSelect={ (e, texture) => setProductTexture(texture) } />
                            </div>
                        </div>
                        <div className={`mt-10`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Add a logo:</h2>
                            <OverlayPickerArray overlaysArray={overlayOptionsArray} elementClassName={`mr-2 border border-gray-300`} isFluid={[40, 40]} onSelect={ (e, overlay) => setProductOverlay(overlay) } />
                        </div>
                        <div className={`mt-10`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Add text:</h2>
                            <FontPicker fonts={availableFonts} className={`unstyled-select`} onChange={ e => setProductFont(e.currentTarget.value) } />
                        </div>
                        <div className={`flex flex-row items-center`}>
                            <DefaultTextInput onChange={ e => setTempText(e.currentTarget.value) } className={`w-7/12 mr-1`} />
                            <DefaultButton onClick={ e => changeProductText() } title={`Add Text`} />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </Page>
  );
};

/*

`https://res.cloudinary.com/demo-robert/q_auto,f_auto/$text_!%20!/o_0/l_fire,w_220,ar_30:25,c_fit,y_-40,x_-5,e_overlay/l_text:arial_100_bold:$(text),y_90,co_rgb:333,o_70,w_250/l_hanging_displace,e_displace,x_10,y_10/u_Hanging_T-Shirt_v83je9,e_replace_color:white:60:white/l_hanging-shirt-texture,o_30/l_Hanger_qa2diz,fl_relative,w_1.0/w_700,ar_1:1,c_pad/shirt_only.jpg`

*/