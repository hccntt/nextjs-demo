// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string;
    result: {
        id: string;
        films: string;
        people: string;
        planets: string;
        species: string;
        vehicles: string;
    };
}

async function handler(req: any, res: NextApiResponse<any>) {

    try {
        //   const url = `${API_DOMAIN}/GetConfig`;
        //   const resp: AxiosResponse<any> = await axiosWrapper.post(url, req.body);
        // const data = {
        //     maKH: "12345",
        //     name: "Nguyen Van A",
        //     diemXHTD: "100",
        //     soGTTT: "12345567",
        //     email: "abc@.com",
        //     typeGTTT: "(CMND)",
        //     ngaySinh: "1/1/2000",
        //     age: "22",
        //     address: "Linh Chieu, Thu Duc",
        //     phone: "0987654321",
        //     trinhDo: "Dai hoc",
        //     ngheNghiep: "Thuc Tap HDBank",
        //     tinhtrangHonNhan: "Da Ket Hon",
        //     donViMoCIF: "--",
        //     ngayMoCIF: "12/11/2000",
        //     CNQLKHUuTien: "001 - Hoi so",
        //     NVQuanLyKh: "HD 017777 - Le Hoai An"
        // }
        // res.status(200).json(data);

        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        const resp = await fetch('https://www.swapi.tech/api/');
        const swapis: Data = await resp.json();

        res.status(200).json(swapis);
    } catch (e) {
        // res.status(200).json({
        //   resultCode: "99",
        //   resultMessage: _get(e, "message"),
        //   request: req.body,
        // });
        console.log(e);
    }
    return;
}
export default handler;
