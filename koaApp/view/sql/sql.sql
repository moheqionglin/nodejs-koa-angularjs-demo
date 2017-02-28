create database shop;

CREATE TABLE products (
  id bigint not null auto_increment,
  name varchar(100),
  description varchar(500),
  category varchar(100),
  price decimal(10,2),
  primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE orders (
  id bigint not null auto_increment,
  name varchar(100),
  street varchar(100),
  city varchar(100),
  state varchar(100),
  zip varchar(100),
  country varchar(100),
  giftwrap bit(1) ,
  products varchar(2000),
   primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE users (
  id bigint not null auto_increment,
  username varchar(100),
  password varchar(500),
   primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into products(name, description, category, price) values ('华为meta9','正品全网通4G 5.5英寸大屏八核超薄智能手机','手机',3399);
insert into products(name, description, category, price) values ('oppoR9s','美图 T8 全网通美颜自拍 美图t8美图手机','手机',2399);
insert into products(name, description, category, price) values ('酷派5s','4000mAH大字体!酷派8721 老人智能手机大屏','手机',799);
insert into products(name, description, category, price) values ('诺基亚5300','军工三防老人手机超长待机大声直板充电宝老年机电信版老人机','手机',455);
insert into products(name, description, category, price) values ('荣耀5','华为honor/荣耀 畅玩5C 全网通4G智能手机超长待机官方正品','手机',1199);
insert into products(name, description, category, price) values ('playboy女款鞋子','夏白色帆布鞋韩版低帮小白鞋学生小清新布鞋平底板鞋休闲平跟女鞋','女鞋',233);
insert into products(name, description, category, price) values ('乐福鞋子','帆布鞋女单鞋韩版乐福鞋厚底松糕鞋女学生小白鞋女休闲板鞋子女夏','女鞋',235);
insert into products(name, description, category, price) values ('打底裤','纯棉外穿打底裤长裤加厚女装大码包臀裙打底裤秋款冬季显瘦小脚裤','裤子',99);

insert into users(username, password) values ('koa', '12345');