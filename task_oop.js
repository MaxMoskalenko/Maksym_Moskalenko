class Data {
    getValue() {}
}

class PrimitiveData extends Data {}

class StringData extends PrimitiveData {
    getLength() {}
    concat(str) {}
}

class NumberData extends PrimitiveData {
    add(num) {}
    subtract(num) {}
}

class BooleanData extends PrimitiveData {
    negate() {}
    and(b) {}
}

class CompositeData extends Data {
    getProperties() {}
}

class ObjectData extends CompositeData {
    getPropertyValue(name) {}
    setPropertyValue(name, value) {}
}

class ArrayData extends CompositeData {
    getElement(index) {}
    setElement(index, value) {}
}
