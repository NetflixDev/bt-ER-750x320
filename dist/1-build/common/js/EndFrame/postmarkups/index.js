import { createSideBySidePostMarkups } from './horizontalSideBySide.js'
import horizontalStacked from './horizontalStacked.js'
import { Align } from 'ad-view'
import { ObjectUtils } from 'ad-utils'

const {
	leftPostMarkup,
	offCenterLeftPostMarkup,
	centerPostMarkup,
	offCenterRightPostMarkup,
	rightPostMarkup
} = createSideBySidePostMarkups({
	defaultArgs: {
		ctaLogoOffset: 20,
		headlineFontSize: 18,
		headlineLockupOffset: 16
	},
	yAlign: {
		type: Align.BOTTOM,
		offset: -26
	},
	layoutXAligns: {
		leftXAlign: {
			type: Align.LEFT,
			against: 40
		},
		offCenterLeftXAlign: {
			type: Align.LEFT,
			against: 147
		},
		centerXAlign: Align.CENTER,
		offCenterRightXAlign: {
			type: Align.RIGHT,
			offset: -147
		},
		rightXAlign: {
			type: Align.RIGHT,
			offset: -40
		}
	}
})

function stackedPostMarkup() {
	horizontalStacked({
		brandingLockupOffset: 16,
		brandingLockupRightPadding: 25,
		headlineFontSize: 18
	})
}

export { leftPostMarkup, offCenterLeftPostMarkup, centerPostMarkup, offCenterRightPostMarkup, rightPostMarkup, stackedPostMarkup }
