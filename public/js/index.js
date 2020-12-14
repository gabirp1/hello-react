"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BooksApp = /*#__PURE__*/function (_React$Component) {
  _inherits(BooksApp, _React$Component);

  var _super = _createSuper(BooksApp);

  function BooksApp() {
    _classCallCheck(this, BooksApp);

    return _super.apply(this, arguments);
  }

  _createClass(BooksApp, [{
    key: "render",
    value: function render() {
      var title = 'Consejero literario digital';
      var subtitle = 'Te asesoro sobre entidades alfanuméricas';
      var libros = [{
        title: 'El principito',
        author: 'Antoine de Saint-Exupéry'
      }, {
        title: 'El Quijote',
        author: 'Miguel de Cervantes Saavedra'
      }, {
        title: 'Platero y yo',
        author: 'Juan Ramón Jiménez'
      }];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        titulo: title,
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(RecommendBook, null), /*#__PURE__*/React.createElement(Books, {
        books: libros
      }), /*#__PURE__*/React.createElement(AddBook, null));
    }
  }]);

  return BooksApp;
}(React.Component);
/* CLASES ------------------------------------------------------- */


var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.titulo), /*#__PURE__*/React.createElement("h2", null, this.props.subtitle));
    }
  }]);

  return Header;
}(React.Component);
/* Header.defaultProps = {
    titulo:0
} */


var RecommendBook = /*#__PURE__*/function (_React$Component3) {
  _inherits(RecommendBook, _React$Component3);

  var _super3 = _createSuper(RecommendBook);

  function RecommendBook() {
    _classCallCheck(this, RecommendBook);

    return _super3.apply(this, arguments);
  }

  _createClass(RecommendBook, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "Recomendar libro"));
    }
  }]);

  return RecommendBook;
}(React.Component);

var Books = /*#__PURE__*/function (_React$Component4) {
  _inherits(Books, _React$Component4);

  var _super4 = _createSuper(Books);

  function Books() {
    _classCallCheck(this, Books);

    return _super4.apply(this, arguments);
  }

  _createClass(Books, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, this.props.books.length > 0 ? "Hay ".concat(this.props.books.length, " libros") : "No hay libros disponibles en enste momentos"), /*#__PURE__*/React.createElement("ul", null, this.props.books.map(function (libro) {
        return /*#__PURE__*/React.createElement(Book, {
          key: libro.title,
          titulo: libro.title
        });
      }), " "));
    }
  }]);

  return Books;
}(React.Component);

var Book = /*#__PURE__*/function (_React$Component5) {
  _inherits(Book, _React$Component5);

  var _super5 = _createSuper(Book);

  function Book() {
    _classCallCheck(this, Book);

    return _super5.apply(this, arguments);
  }

  _createClass(Book, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.titulo);
    }
  }]);

  return Book;
}(React.Component);

var AddBook = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddBook, _React$Component6);

  var _super6 = _createSuper(AddBook);

  function AddBook() {
    _classCallCheck(this, AddBook);

    return _super6.apply(this, arguments);
  }

  _createClass(AddBook, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
        htmlFor: "title"
      }, "T\xEDtulo"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title",
        id: "title"
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "author"
      }, "Autor"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "author",
        id: "author"
      }), /*#__PURE__*/React.createElement("button", null, "A\xF1adir libro"));
    }
  }]);

  return AddBook;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(BooksApp, null), document.querySelector('#appRoot'));

//# sourceMappingURL=index.js.map