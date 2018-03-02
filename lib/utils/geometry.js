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


	coverToRect(fromRect, toRect) {
		// TODO
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
		return fromRect.width > fromRect.height
			? this.scaleToWidth(fromRect, toRect.width)
			: this.scaleToHeight(fromRect, toRect.height);
	}

};