/**
 * @description Return images flow preset
 * @memberOf module:Presets
 * @return {Preset}
 */
function getImagesPreset() {
  return {
    test: /\.(jpe?g|png|gif)$/i,
    type: 'asset/resource',
  };
}

module.exports = getImagesPreset;
