/**
 * @description Return inline files flow preset
 * @memberOf module:Presets
 * @return {Preset}
 */
function getInlinePreset() {
  return {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/inline',
  };
}

module.exports = getInlinePreset;
