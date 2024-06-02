import { Box,Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


import '../../../src/styles.css';

function Slider(){

    return(
        <Box zIndex='0'>
            <Box>
                <Swiper
                spaceBetween={50}
                centeredSlides={true}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,EffectFade]}
                >
                <SwiperSlide><Image src="https://img.freepik.com/premium-psd/new-style-sale-promotion-banner-template_85212-146.jpg?w=1060" height='500px'/></SwiperSlide>
                <SwiperSlide><Image src="https://img.freepik.com/premium-vector/online-shopping-with-3d-illustrations_269039-969.jpg?w=1060" width='100%' height='500px'/></SwiperSlide>
                <SwiperSlide><Image src="https://img.freepik.com/free-vector/application-smartphone-mobile-computer-payments-online-transaction-shopping-online-process-smartphone-vecter-cartoon-illustration-isometric-design_1150-59281.jpg?w=1380&t=st=1690667940~exp=1690668540~hmac=652b1677b4f7cf129d9400072697e1a59039f4779739eadd55efa09b870123c5" height='500px'/></SwiperSlide>
                <SwiperSlide><Image src="https://img.freepik.com/free-vector/application-smartphone-mobile-computer-payments-online-transaction-shopping-online-process-smartphone-vecter-cartoon-illustration-isometric-design_1150-62437.jpg?w=1380&t=st=1690667902~exp=1690668502~hmac=e05a69e4153ee4bf23867b49c36f2aac2534a44e002d7deb2e8f92511983cbc7" height='500px'/></SwiperSlide>
                </Swiper>
            </Box>
      </Box>
    )
}

export default Slider