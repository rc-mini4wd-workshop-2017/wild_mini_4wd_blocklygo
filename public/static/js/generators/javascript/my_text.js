Blockly.JavaScript['mytext_isInclude'] = function(block) {
  // Is the string null or array empty?
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text = Blockly.JavaScript.valueToCode(block, 'FIND',
      Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
  return [ varName + '.indexOf(' + text + ') >= 0', Blockly.JavaScript.ORDER_LOGICAL_NOT];
};
