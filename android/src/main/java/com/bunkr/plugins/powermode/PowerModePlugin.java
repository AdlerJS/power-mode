package com.bunkr.plugins.powermode;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Context;
import android.os.PowerManager;

@CapacitorPlugin(name = "PowerMode")
public class PowerModePlugin extends Plugin {
   @PluginMethod
      public void lowPowerModeEnabled(PluginCall call) {
       PowerManager powerManager = null;
       if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
           powerManager = (PowerManager) getContext().getSystemService(Context.POWER_SERVICE);
       }
       boolean lowPowerModeEnabled = powerManager.isPowerSaveMode();

          JSObject ret = new JSObject();
          ret.put("lowPowerModeEnabled", lowPowerModeEnabled);
          call.resolve(ret);
      }
}
