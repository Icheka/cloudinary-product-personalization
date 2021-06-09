import { useState, useEffect } from 'react';
import ImageViewer from '../components/composites/ImageViewer';
import Navbar from '../components/composites/Navbar';
import Page from '../components/layout/Page';
import { defaults } from '../configs/app';
import { ColorPickerArray, ColorDropPicker } from '../components/composites/Colors';
import FontPicker from '../components/elements/FontPicker';
import { DefaultTextInput } from '../components/elements/TextInput';
import { DefaultButton } from '../components/elements/Buttons';


export default function Home() {
    // COLORS
    const [colorArray] = useState([
        { color: '#fff',  },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:47E8D2:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:DCA381:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:702C3C:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:E9C660:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:A11D1F:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:897115:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:598DE6:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
    ]);
    const [colorTextureArray] = useState([
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:47E8D2:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:DCA381:60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg` },
    ]);
    const [textureOptionsArray] = useState([
        { image: `https://res.cloudinary.com/demo-robert/image/upload/q_auto,f_auto,h_30/cloudinary-logo.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/image/upload/q_auto,f_auto,h_30/fire.png` }
    ]);

    // PERSONALIZATION TEXT
    const [selectedFont, setSelectedFont] = useState(null);
    const [availableFonts] = useState([
        { title: `Arial`, value: `arial`, selected: true },
        { title: `Georgia`, value: `georgia` },
        { title: `Sacremento`, value: `sacramento` },
        { title: `Roboto`, value: `roboto` },
        { title: `Montserrat`, value: `montserrat` },
        { title: `Bitter`, value: `bitter` }
    ]);

    // PERSPECTIVES
    const [imagePerspectives] = useState([
        { image: `https://res.cloudinary.com/demo-robert/q_auto,f_auto/$text_!%20!/o_0/l_sample,o_0,w_220,ar_30:25,c_fit,y_-40,x_-5,e_overlay/l_text:arial_100_bold:$(text),y_90,co_rgb:333,o_70,w_250/l_hanging_displace,e_displace,x_10,y_10/u_Hanging_T-Shirt_v83je9,e_replace_color:white:60:white/l_hanging-shirt-texture,o_0/l_Hanger_qa2diz,fl_relative,w_1.0/w_75,ar_1:1,c_pad/shirt_only.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/q_auto,f_auto/$text_!%20!/o_0/l_sample,o_0,w_330,ar_30:25,c_fit,y_-30,x_-5,e_overlay/l_text:arial_100_bold:$(text),y_150,co_rgb:333,o_70,w_350/l_laying_displace,e_displace,x_10,y_10/u_laying-shirt_xqstgr,e_replace_color:white:60:white/l_laying-shirt-texture,o_0/w_75,ar_1:1,c_pad/shirt_only.jpg` },
        { image: `https://res.cloudinary.com/demo-robert/q_auto,f_auto/$text_!%20!/o_0/l_sample,o_0,w_300,ar_30:25,c_fit,y_-200,x_-5,e_overlay/l_text:arial_100_bold:$(text),y_-40,co_rgb:333,o_70,w_300/l_shirt_displace,e_displace,x_10,y_10/u_shirt_only,e_replace_color:white:60:white/l_heather_texture,o_0/u_model2/w_75,ar_1:1,c_pad/shirt_only.jpg` },
    ]);

  return (
    <Page>
        <div className={`flex flex-col items-center min-h-screen w-full`}>
            <div className={`w-full pl-44`}>
                <Navbar className={`w-5/12 ml-60`} />
            </div>
            <div className={`flex flex-1`}>
                <div className={`flex flex-row w-full`}>
                    <main className={`w-8/12`}>
                        <ImageViewer src={defaults.image} alt={``} />
                        <div className={`bg-transparent`}>
                            <div className={`ml-0`}>
                                <ColorPickerArray array={imagePerspectives} elementClassName={`mr-2 border border-gray-300`} isFluid={[80, 80]} />
                            </div>
                        </div>
                    </main>
                    <aside className={`w-4/12`}>
                        <div className={`mt-24`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Select a color:</h2>
                            <div>
                                <ColorPickerArray array={colorArray} elementClassName={`mx-1`} />
                            </div>
                        </div>
                        <div className={`mt-10`}>
                            <h6 className={`text-xs text-blue-500`}>Add a custom color</h6>
                            <ColorDropPicker />
                        </div>
                        <div className={`mt-10`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Select a texture:</h2>
                            <div>
                                <ColorPickerArray array={colorTextureArray} elementClassName={`mx-1`} />
                            </div>
                        </div>
                        <div className={`mt-10`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Add a logo:</h2>
                            <ColorPickerArray array={textureOptionsArray} elementClassName={`mr-2 border border-gray-300`} isFluid={[40, 40]} />
                        </div>
                        <div className={`mt-10`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Add text:</h2>
                            <FontPicker fonts={availableFonts} className={`unstyled-select`} defaultSelection={`arial`} />
                        </div>
                        <div className={`flex flex-row items-center`}>
                            <DefaultTextInput className={`w-7/12 mr-1`} />
                            <DefaultButton title={`Add Text`} />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </Page>
  );
};