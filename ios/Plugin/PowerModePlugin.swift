import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PowerModePlugin)
public class PowerModePlugin: CAPPlugin {
    @objc func lowPowerModeEnabled(_ call: CAPPluginCall) {
          let lowPowerModeEnabled = ProcessInfo.processInfo.isLowPowerModeEnabled
          call.resolve(["lowPowerModeEnabled": lowPowerModeEnabled])
      }
}
