import { useState, useEffect } from 'react';
import ImageViewer from '../components/composites/ImageViewer';
import Navbar from '../components/composites/Navbar';
import Page from '../components/layout/Page';
import { defaults } from '../configs/app';
import { ColorPickerArray } from '../components/composites/Colors';


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


  return (
    <Page>
        <div className={`px-28 min-h-screen w-full`}>
            <Navbar />
            <div className={`flex flex-1`}>
                <div className={`flex flex-row w-full`}>
                    <main className={`w-8/12`}>
                        <ImageViewer src={defaults.image} alt={``} />
                    </main>
                    <aside className={`w-4/12`}>
                        <div className={`mt-24`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Select a color:</h2>
                            <div>
                                <ColorPickerArray array={colorArray} elementClassName={`mx-1`} />
                            </div>
                        </div>
                        <div className={`mt-24`}>
                            <h2 className={`font-bold arial text-lg mb-1`}>Select a texture:</h2>
                            <div>
                                <ColorPickerArray array={colorTextureArray} elementClassName={`mx-1`} />
                            </div>
                        </div>
                    </aside>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-20 bg-gray-800`}>
                    BOTTOM
                </div>
            </div>
        </div>
    </Page>
  );
};