import {NextApiRequest, NextApiResponse} from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

// For preventing header corruption, specifically Content-Length header
export const config = {
    api: {
        bodyParser: false,
    },
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    httpProxyMiddleware(req, res, {
        target: 'http://localhost:21942'
    })
}