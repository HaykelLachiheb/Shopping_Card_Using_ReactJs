"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
       _inherits(Header, _React$Component);

       function Header() {
              _classCallCheck(this, Header);

              return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
       }

       _createClass(Header, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "p",
                            null,
                            "Name : ",
                            this.props.Name,
                            " ",
                            this.props.LastName,
                            React.createElement("br", null),
                            " ",
                            React.createElement("br", null),
                            "Fidelity Number : ",
                            this.props.Fidelity_Number
                     );
              }
       }]);

       return Header;
}(React.Component);

var InputList = function (_React$Component2) {
       _inherits(InputList, _React$Component2);

       function InputList() {
              _classCallCheck(this, InputList);

              var _this2 = _possibleConstructorReturn(this, (InputList.__proto__ || Object.getPrototypeOf(InputList)).call(this));

              _this2.state = {
                     products: [],
                     item: "5"
              };

              return _this2;
       }

       _createClass(InputList, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "div",
                            { id: "Div_Items" },
                            React.createElement(Item1, { MyNum: this.state.Number, MyPrice: this.state.Price }),
                            React.createElement(Item2, null),
                            React.createElement(Item3, null),
                            React.createElement(Item4, null)
                     );
              }
       }]);

       return InputList;
}(React.Component);

var Item1 = function (_React$Component3) {
       _inherits(Item1, _React$Component3);

       function Item1() {
              _classCallCheck(this, Item1);

              var _this3 = _possibleConstructorReturn(this, (Item1.__proto__ || Object.getPrototypeOf(Item1)).call(this));

              _this3.state = {

                     Name: "KeyBoards",
                     Number: "0",
                     Price: "100"

              };

              _this3.ChangeInput1 = function (e) {

                     _this3.setState({

                            Number: e.target.value
                     });
              };

              return _this3;
       }

       _createClass(Item1, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "p",
                            null,
                            "    ",
                            this.state.Name,
                            React.createElement("br", null),
                            "     Price : ",
                            this.state.Price,
                            "    Number: ",
                            React.createElement("input", { type: "text", onChange: this.ChangeInput1 }),
                            "    Total Price : ",
                            this.state.Number * this.state.Price,
                            "  "
                     );
              }
       }]);

       return Item1;
}(React.Component);

var Item2 = function (_React$Component4) {
       _inherits(Item2, _React$Component4);

       function Item2() {
              _classCallCheck(this, Item2);

              var _this4 = _possibleConstructorReturn(this, (Item2.__proto__ || Object.getPrototypeOf(Item2)).call(this));

              _this4.state = {

                     Name: "Mouse",
                     Number: "",
                     Price: "50"
              };

              _this4.ChangeInput1 = function (e) {

                     _this4.setState({

                            Number: e.target.value
                     });
              };

              return _this4;
       }

       _createClass(Item2, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "p",
                            null,
                            this.state.Name,
                            React.createElement("br", null),
                            "  Price : ",
                            this.state.Price,
                            "    Number: ",
                            React.createElement("input", { type: "text", onChange: this.ChangeInput1 }),
                            "    Total Price : ",
                            this.state.Number * this.state.Price
                     );
              }
       }]);

       return Item2;
}(React.Component);

var Item3 = function (_React$Component5) {
       _inherits(Item3, _React$Component5);

       function Item3() {
              _classCallCheck(this, Item3);

              var _this5 = _possibleConstructorReturn(this, (Item3.__proto__ || Object.getPrototypeOf(Item3)).call(this));

              _this5.state = {

                     Name: "Screen",
                     Number: "",
                     Price: "200"
              };

              _this5.ChangeInput1 = function (e) {

                     _this5.setState({

                            Number: e.target.value
                     });
              };

              return _this5;
       }

       _createClass(Item3, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "p",
                            null,
                            this.state.Name,
                            React.createElement("br", null),
                            "  Price : ",
                            this.state.Price,
                            "    Number: ",
                            React.createElement("input", { type: "text", onChange: this.ChangeInput1 }),
                            "    Total Price : ",
                            this.state.Number * this.state.Price
                     );
              }
       }]);

       return Item3;
}(React.Component);

var Item4 = function (_React$Component6) {
       _inherits(Item4, _React$Component6);

       function Item4() {
              _classCallCheck(this, Item4);

              var _this6 = _possibleConstructorReturn(this, (Item4.__proto__ || Object.getPrototypeOf(Item4)).call(this));

              _this6.state = {

                     Name: "Camera",
                     Number: "",
                     Price: "300"

              };

              _this6.ChangeInput1 = function (e) {

                     _this6.setState({

                            Number: e.target.value
                     });
              };

              return _this6;
       }

       _createClass(Item4, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "p",
                            null,
                            this.state.Name,
                            React.createElement("br", null),
                            "   Price : ",
                            this.state.Price,
                            "   Number: ",
                            React.createElement("input", { type: "text", onChange: this.ChangeInput1 }),
                            "    Total Price : ",
                            this.state.Number * this.state.Price
                     );
              }
       }]);

       return Item4;
}(React.Component);

var TotalPrice = function (_React$Component7) {
       _inherits(TotalPrice, _React$Component7);

       function TotalPrice() {
              _classCallCheck(this, TotalPrice);

              return _possibleConstructorReturn(this, (TotalPrice.__proto__ || Object.getPrototypeOf(TotalPrice)).call(this));
       }

       _createClass(TotalPrice, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "div",
                            { id: "Btn_Div" },
                            React.createElement(Text, null),
                            React.createElement(Result, null)
                     );
              }
       }]);

       return TotalPrice;
}(React.Component);

var Text = function (_React$Component8) {
       _inherits(Text, _React$Component8);

       function Text() {
              _classCallCheck(this, Text);

              var _this8 = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

              _this8.state = {

                     Number: ""

              };

              return _this8;
       }

       _createClass(Text, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "div",
                            null,
                            React.createElement(
                                   "p",
                                   { id: "Text_Total_Price" },
                                   "Total Price"
                            ),
                            React.createElement(
                                   "p",
                                   { id: "Teeext" },
                                   this.state.Number
                            )
                     );
              }
       }]);

       return Text;
}(React.Component);

var Result = function (_React$Component9) {
       _inherits(Result, _React$Component9);

       function Result() {
              _classCallCheck(this, Result);

              return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
       }

       _createClass(Result, [{
              key: "render",
              value: function render() {}
       }]);

       return Result;
}(React.Component);

var MyApp = function (_React$Component10) {
       _inherits(MyApp, _React$Component10);

       function MyApp() {
              _classCallCheck(this, MyApp);

              var _this10 = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this));

              _this10.state = {
                     Phone: "25123456",
                     Adress: "750 Elnobel Road,Elezdihar City",
                     Postal: "6011",
                     City: "Gabes"

              };

              return _this10;
       }

       _createClass(MyApp, [{
              key: "render",
              value: function render() {

                     return React.createElement(
                            "div",
                            { id: "First_Div" },
                            React.createElement(Header, { Name: "Haykel", LastName: "Lachiheb", Fidelity_Number: "1234" }),
                            "Phone Number : ",
                            this.state.Phone,
                            React.createElement("br", null),
                            React.createElement("br", null),
                            "Adress : ",
                            this.state.Adress,
                            " ",
                            this.state.Postal,
                            " ",
                            this.state.City,
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(InputList, null),
                            React.createElement("b", null),
                            React.createElement(TotalPrice, null),
                            React.createElement(
                                   "button",
                                   { id: "Btn" },
                                   " Validate "
                            )
                     );
              }
       }]);

       return MyApp;
}(React.Component);

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('App'));
