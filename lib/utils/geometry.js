'use strict';

module.exports = {

	/**
	 * Рассчитать пропорции по высоте
	 *
	 * @param {Object} from
	 * @param {Number} from.width
	 * @param {Number} from.height
	 * @param {Number=} toHeight
	 *
	 * @return {Object}
	 * */
	scaleToHeight: function(from, toHeight) {
		let k = from.width / from.height;

		return {
			width: toHeight * k,
			height: toHeight
		}
	},


	/**
	 * Рассчитать пропорции по ширине
	 *
	 * @param {Object} from
	 * @param {Number} from.width
	 * @param {Number} from.height
	 * @param {Number=} toWidth
	 *
	 * @return {Object}
	 * */
	scaleToWidth(from, toWidth) {
		let k = from.width / from.height;

		return {
			width: toWidth,
			height: toWidth / k
		}
	},


	/**
	 * Описать в размер
	 *
	 * @param  {Object} fromRect
	 * @param  {Object} toRect
	 *
	 * @return {Object}
	 */
	coverToRect(fromRect, toRect) {
		let toK = toRect.width / toRect.height,
		    fromK = fromRect.width / fromRect.height;

		return toK < fromK
			? this.scaleToHeight(fromRect, toRect.height)
			: this.scaleToWidth(fromRect, toRect.width);
	},


	/**
	 * Вписать в размеры
	 *
	 * @param fromRect.width
	 * @param fromRect.height
	 * @param toRect.width
	 * @param toRect.height
	 *
	 * @return {Object}
	 * */
	containToRect(fromRect, toRect) {
		let toK = toRect.width / toRect.height,
		    fromK = fromRect.width / fromRect.height;

		return toK > fromK
			? this.scaleToHeight(fromRect, toRect.height)
			: this.scaleToWidth(fromRect, toRect.width);
	}

};
