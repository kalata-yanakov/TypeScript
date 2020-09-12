import { IProduct } from "./product";
import { ScentType } from "../../models/common/scent-type";

export interface ICream extends IProduct {
    scent: ScentType;
}