/**
 * Created by n0m4dz on 11/17/16.
 */
import path from 'path'

export const getPath = (pathParam) => {
    return path.join(__dirname, '../'+ pathParam);
}
