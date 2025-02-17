export default class LocalStorageService {

    storage = localStorage;

    getData = () => {
        return this.storage.getItem("user-data");
    }

    setData = (data) => {
        this.storage.setItem("user-data", data);
    }

    removeData = () => {
        this.storage.removeItem("user-data");
    }

}