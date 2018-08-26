import Base from "@bitclave/base-client-js";

const base = new Base("https://base2-bitclva-com.herokuapp.com", 'localhost', '', '');
base.changeStrategy('POSTGRES');

export base;